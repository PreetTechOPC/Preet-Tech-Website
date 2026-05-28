import { Save, Building2, Mail, Phone, Hash, MapPin, FileText } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-10 pb-10 max-w-6xl">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-500">Manage your company details, branding, and quotation templates.</p>
      </div>

      <div className="space-y-10">
        {/* Section 1: Company Profile */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-slate-900">Company Profile</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              This information will be displayed on all your generated quotations and invoices. Ensure it matches your legal business details.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-white shadow-sm md:col-span-2">
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                
                <div className="sm:col-span-3">
                  <label htmlFor="business-name" className="block text-sm font-medium leading-6 text-slate-900">
                    Business Name
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Building2 className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="business-name"
                      defaultValue="Preet Tech (OPC) Private Limited"
                      className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
                    Email Address
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      defaultValue="hello@preettech.com"
                      className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">
                    Phone Number
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue="+91 9756667397"
                      className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="cin" className="block text-sm font-medium leading-6 text-slate-900">
                    CIN / GST Number
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Hash className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="cin"
                      defaultValue="U62013UT20260PC021112"
                      className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-slate-900">
                    Registered Address
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex pt-3 pl-3">
                      <MapPin className="h-4 w-4 text-slate-400" />
                    </div>
                    <textarea
                      id="address"
                      rows={3}
                      defaultValue="3/118 Subhash Nagar, Haldwani, Uttarakhand - 263139, INDIA"
                      className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Footer */}
            <div className="flex items-center justify-end gap-x-4 border-t border-border/50 bg-slate-50/50 px-6 py-4 rounded-b-2xl">
              <button type="button" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700">
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md"
              >
                <Save className="h-4 w-4" /> Save changes
              </button>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-border/50" />
          </div>
        </div>

        {/* Section 2: Default Terms */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-slate-900">Default Terms & Conditions</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Set the default legal terms that will automatically populate at the bottom of every new quotation you create.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-white shadow-sm md:col-span-2">
            <div className="p-6 sm:p-8">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex pt-3 pl-3">
                  <FileText className="h-4 w-4 text-slate-400" />
                </div>
                <textarea 
                  rows={6} 
                  className="block w-full rounded-xl border border-border/60 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 transition-colors focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="1. 50% advance payment required to initiate the project.&#10;2. Quotation is valid for 15 days from the date of issue.&#10;3. Final delivery upon receipt of remaining 50% payment.&#10;4. Domain and hosting charges are separate unless specified."
                />
              </div>
            </div>
            
            {/* Form Footer */}
            <div className="flex items-center justify-end gap-x-4 border-t border-border/50 bg-slate-50/50 px-6 py-4 rounded-b-2xl">
              <button type="button" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700">
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md"
              >
                <Save className="h-4 w-4" /> Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
