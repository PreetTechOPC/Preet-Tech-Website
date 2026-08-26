"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, User, Briefcase, Loader2, CheckCircle, Video, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Make sure this exists, or I will use standard twMerge

interface Slot {
    start: string;
    end: string;
    display: string;
    isoStart: string;
    isoEnd: string;
}

interface MeetingSchedulerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MeetingSchedulerModal({ isOpen, onClose }: MeetingSchedulerModalProps) {
    const [step, setStep] = useState(1);
    const [date, setDate] = useState<string>('');
    const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [timezone, setTimezone] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: 'Website Development',
        customPurpose: ''
    });

    const [booking, setBooking] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingError, setBookingError] = useState('');
    const [meetDetails, setMeetDetails] = useState<any>(null);

    const purposes = [
        'Website Development',
        'Mobile App Development',
        'Custom Software',
        'Digital Marketing',
        'Business Consultation',
        'Partnership',
        'Other'
    ];

    useEffect(() => {
        if (!isOpen) {
            // Reset when closed
            setTimeout(() => {
                setStep(1);
                setDate('');
                setSelectedSlot(null);
                setBookingSuccess(false);
                setBookingError('');
                setMeetDetails(null);
            }, 300);
        }
    }, [isOpen]);

    const fetchSlots = async (selectedDate: string) => {
        setLoadingSlots(true);
        setBookingError('');
        try {
            const res = await fetch(`/api/meetings/available-slots?date=${selectedDate}`);
            const data = await res.json();
            if (data.success) {
                setAvailableSlots(data.slots);
                setTimezone(data.timezone);
            } else {
                setBookingError(data.error || 'Failed to load slots');
            }
        } catch (err) {
            setBookingError('Error connecting to the server');
        } finally {
            setLoadingSlots(false);
        }
    };

    const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setDate(val);
        setSelectedSlot(null);
        if (val) {
            fetchSlots(val);
        }
    };

    const handleSlotSelect = (slot: Slot) => {
        setSelectedSlot(slot);
        setStep(2);
    };

    const handleConfirm = async () => {
        setBooking(true);
        setBookingError('');

        const purposeToSend = formData.purpose === 'Other' ? formData.customPurpose : formData.purpose;

        try {
            const res = await fetch('/api/meetings/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    purpose: purposeToSend,
                    date: date,
                    isoStart: selectedSlot?.isoStart,
                    isoEnd: selectedSlot?.isoEnd,
                    timezone: timezone,
                    source: 'Website'
                })
            });

            const data = await res.json();

            if (data.success) {
                setMeetDetails(data.meeting);
                setBookingSuccess(true);
                setStep(4);
            } else {
                setBookingError(data.error || 'Booking failed');
                if (data.refresh) {
                    // Slot taken, go back to step 1
                    setStep(1);
                    fetchSlots(date);
                }
            }
        } catch (err) {
            setBookingError('Network error. Please try again.');
        } finally {
            setBooking(false);
        }
    };

    // Calculate minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans"
                >
                    <motion.div
                        initial={{ y: 50, scale: 0.95, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 20, scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    Book a Strategy Call
                                </h2>
                                {!bookingSuccess && (
                                    <p className="text-sm text-slate-500 mt-1">
                                        Step {step} of 3
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                            {bookingError && step !== 4 && (
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm">
                                    {bookingError}
                                </div>
                            )}

                            {/* STEP 1: Date & Time */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                            <CalendarIcon size={16} className="mr-2 text-brand-medium" />
                                            Select Date
                                        </label>
                                        <input
                                            type="date"
                                            min={today}
                                            value={date}
                                            onChange={handleDateSelect}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all"
                                        />
                                    </div>

                                    {date && (
                                        <div>
                                            <label className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                                <Clock size={16} className="mr-2 text-brand-medium" />
                                                Available Times {timezone && <span className="text-xs font-normal text-slate-400 ml-2">({timezone})</span>}
                                            </label>

                                            {loadingSlots ? (
                                                <div className="flex flex-col items-center justify-center py-8 text-brand-medium">
                                                    <Loader2 size={24} className="animate-spin mb-2" />
                                                    <span className="text-sm font-medium">Checking availability...</span>
                                                </div>
                                            ) : availableSlots.length > 0 ? (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                    {availableSlots.map((slot, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => handleSlotSelect(slot)}
                                                            className="py-3 px-4 rounded-xl border border-brand-medium/30 text-brand-medium font-medium text-sm hover:bg-brand-medium hover:text-white transition-all active:scale-95"
                                                        >
                                                            {slot.display}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-8 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-white/5">
                                                    <p className="text-slate-500 text-sm">No available slots for this date.</p>
                                                    <p className="text-slate-400 text-xs mt-1">Please select another date.</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* STEP 2: Details */}
                            {step === 2 && (
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between p-4 bg-brand-medium/10 rounded-xl mb-2 border border-brand-medium/20">
                                        <div className="flex items-center text-brand-medium font-semibold text-sm">
                                            <CalendarIcon size={16} className="mr-2" />
                                            {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center text-brand-medium font-semibold text-sm">
                                            <Clock size={16} className="mr-2" />
                                            {selectedSlot?.display}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                <User size={16} className="text-slate-400" />
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Rahul Sharma"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="rahul@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number *</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Meeting Purpose *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                <Briefcase size={16} className="text-slate-400" />
                                            </div>
                                            <select
                                                value={formData.purpose}
                                                onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all appearance-none"
                                            >
                                                {purposes.map(p => <option key={p} value={p}>{p}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {formData.purpose === 'Other' && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Please specify *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.customPurpose}
                                                onChange={e => setFormData({ ...formData, customPurpose: e.target.value })}
                                                placeholder="Brief description..."
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/50 transition-all"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            )}

                            {/* STEP 3: Review */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                                        <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-3">Review Meeting Details</h3>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Date</p>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Time</p>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">{selectedSlot?.display} ({timezone})</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Name</p>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">{formData.name}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                                                <p className="font-medium text-slate-800 dark:text-slate-200 truncate">{formData.email}</p>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Purpose</p>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">{formData.purpose === 'Other' ? formData.customPurpose : formData.purpose}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 text-center">
                                        By confirming, you agree to receive email notifications regarding this meeting.
                                    </p>
                                </div>
                            )}

                            {/* STEP 4: Success */}
                            {step === 4 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-6 space-y-6"
                                >
                                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={40} className="text-emerald-500" />
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Successfully Scheduled!</h3>
                                        <p className="text-slate-500">Your strategy call has been confirmed.</p>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl p-5 text-left inline-block w-full max-w-sm mx-auto">
                                        <div className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                                            <CalendarIcon size={18} className="mr-3 text-brand-medium" />
                                            <span className="font-medium">{new Date(meetDetails?.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center text-slate-700 dark:text-slate-300 mb-4">
                                            <Clock size={18} className="mr-3 text-brand-medium" />
                                            <span className="font-medium">{meetDetails?.time}</span>
                                        </div>
                                        <a 
                                            href={meetDetails?.meetLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full py-3 bg-brand-medium text-white rounded-xl font-bold hover:bg-brand-medium/90 transition-all"
                                        >
                                            <Video size={18} className="mr-2" />
                                            Join Google Meet
                                        </a>
                                    </div>

                                    <p className="text-sm text-slate-500">
                                        A confirmation has been sent to your email address.
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Controls */}
                        {step < 4 && (
                            <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 flex justify-between">
                                {step > 1 ? (
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="px-6 py-2.5 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl transition-colors flex items-center"
                                        disabled={booking}
                                    >
                                        <ArrowLeft size={16} className="mr-2" />
                                        Back
                                    </button>
                                ) : (
                                    <div />
                                )}

                                {step === 1 && selectedSlot && (
                                    <button
                                        onClick={() => setStep(2)}
                                        className="px-6 py-2.5 bg-brand-medium text-white font-medium hover:bg-brand-medium/90 rounded-xl transition-all shadow-lg shadow-brand-medium/30 flex items-center"
                                    >
                                        Continue
                                        <ArrowRight size={16} className="ml-2" />
                                    </button>
                                )}

                                {step === 2 && (
                                    <button
                                        onClick={() => {
                                            if (!formData.name || !formData.email || !formData.phone || (formData.purpose === 'Other' && !formData.customPurpose)) {
                                                setBookingError('Please fill in all required fields.');
                                                return;
                                            }
                                            setBookingError('');
                                            setStep(3);
                                        }}
                                        className="px-6 py-2.5 bg-brand-medium text-white font-medium hover:bg-brand-medium/90 rounded-xl transition-all shadow-lg shadow-brand-medium/30 flex items-center"
                                    >
                                        Review
                                        <ArrowRight size={16} className="ml-2" />
                                    </button>
                                )}

                                {step === 3 && (
                                    <button
                                        onClick={handleConfirm}
                                        disabled={booking}
                                        className="px-6 py-2.5 bg-brand-medium text-white font-bold hover:bg-brand-medium/90 rounded-xl transition-all shadow-lg shadow-brand-medium/30 flex items-center disabled:opacity-70"
                                    >
                                        {booking ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin mr-2" />
                                                Confirming...
                                            </>
                                        ) : (
                                            <>
                                                Confirm Meeting
                                                <CheckCircle size={18} className="ml-2" />
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        )}
                        
                        {step === 4 && (
                            <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-all"
                                >
                                    Back to Home
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
