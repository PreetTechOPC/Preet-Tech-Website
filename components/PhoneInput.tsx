"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    countryCode: string;
    onCountryCodeChange: (code: string) => void;
    placeholder?: string;
    className?: string;
}

const countryCodes = [
    { code: '+93', country: 'AF', label: '🇦🇫 +93', maxLength: 9 },
    { code: '+35818', country: 'AX', label: '🇦🇽 +35818', maxLength: 15 },
    { code: '+355', country: 'AL', label: '🇦🇱 +355', maxLength: 15 },
    { code: '+213', country: 'DZ', label: '🇩🇿 +213', maxLength: 15 },
    { code: '+1684', country: 'AS', label: '🇦🇸 +1684', maxLength: 15 },
    { code: '+376', country: 'AD', label: '🇦🇩 +376', maxLength: 15 },
    { code: '+244', country: 'AO', label: '🇦🇴 +244', maxLength: 15 },
    { code: '+1264', country: 'AI', label: '🇦🇮 +1264', maxLength: 15 },
    { code: '+1268', country: 'AG', label: '🇦🇬 +1268', maxLength: 15 },
    { code: '+54', country: 'AR', label: '🇦🇷 +54', maxLength: 10 },
    { code: '+374', country: 'AM', label: '🇦🇲 +374', maxLength: 15 },
    { code: '+297', country: 'AW', label: '🇦🇼 +297', maxLength: 15 },
    { code: '+61', country: 'AU', label: '🇦🇺 +61', maxLength: 9 },
    { code: '+43', country: 'AT', label: '🇦🇹 +43', maxLength: 10 },
    { code: '+994', country: 'AZ', label: '🇦🇿 +994', maxLength: 15 },
    { code: '+1242', country: 'BS', label: '🇧🇸 +1242', maxLength: 15 },
    { code: '+973', country: 'BH', label: '🇧🇭 +973', maxLength: 8 },
    { code: '+880', country: 'BD', label: '🇧🇩 +880', maxLength: 10 },
    { code: '+1246', country: 'BB', label: '🇧🇧 +1246', maxLength: 15 },
    { code: '+375', country: 'BY', label: '🇧🇾 +375', maxLength: 15 },
    { code: '+32', country: 'BE', label: '🇧🇪 +32', maxLength: 9 },
    { code: '+501', country: 'BZ', label: '🇧🇿 +501', maxLength: 15 },
    { code: '+229', country: 'BJ', label: '🇧🇯 +229', maxLength: 15 },
    { code: '+1441', country: 'BM', label: '🇧🇲 +1441', maxLength: 15 },
    { code: '+975', country: 'BT', label: '🇧🇹 +975', maxLength: 15 },
    { code: '+591', country: 'BO', label: '🇧🇴 +591', maxLength: 15 },
    { code: '+387', country: 'BA', label: '🇧🇦 +387', maxLength: 15 },
    { code: '+267', country: 'BW', label: '🇧🇼 +267', maxLength: 15 },
    { code: '+47', country: 'BV', label: '🇧🇻 +47', maxLength: 15 },
    { code: '+55', country: 'BR', label: '🇧🇷 +55', maxLength: 11 },
    { code: '+246', country: 'IO', label: '🇮🇴 +246', maxLength: 15 },
    { code: '+1284', country: 'VG', label: '🇻🇬 +1284', maxLength: 15 },
    { code: '+673', country: 'BN', label: '🇧🇳 +673', maxLength: 15 },
    { code: '+359', country: 'BG', label: '🇧🇬 +359', maxLength: 15 },
    { code: '+226', country: 'BF', label: '🇧🇫 +226', maxLength: 15 },
    { code: '+257', country: 'BI', label: '🇧🇮 +257', maxLength: 15 },
    { code: '+855', country: 'KH', label: '🇰🇭 +855', maxLength: 9 },
    { code: '+237', country: 'CM', label: '🇨🇲 +237', maxLength: 15 },
    { code: '+1', country: 'CA', label: '🇨🇦 +1', maxLength: 10 },
    { code: '+238', country: 'CV', label: '🇨🇻 +238', maxLength: 15 },
    { code: '+599', country: 'BQ', label: ' +599', maxLength: 15 },
    { code: '+1345', country: 'KY', label: '🇰🇾 +1345', maxLength: 15 },
    { code: '+236', country: 'CF', label: '🇨🇫 +236', maxLength: 15 },
    { code: '+235', country: 'TD', label: '🇹🇩 +235', maxLength: 15 },
    { code: '+56', country: 'CL', label: '🇨🇱 +56', maxLength: 9 },
    { code: '+86', country: 'CN', label: '🇨🇳 +86', maxLength: 11 },
    { code: '+61', country: 'CX', label: '🇨🇽 +61', maxLength: 15 },
    { code: '+61', country: 'CC', label: '🇨🇨 +61', maxLength: 15 },
    { code: '+57', country: 'CO', label: '🇨🇴 +57', maxLength: 10 },
    { code: '+269', country: 'KM', label: '🇰🇲 +269', maxLength: 15 },
    { code: '+242', country: 'CG', label: '🇨🇬 +242', maxLength: 15 },
    { code: '+682', country: 'CK', label: '🇨🇰 +682', maxLength: 15 },
    { code: '+506', country: 'CR', label: '🇨🇷 +506', maxLength: 15 },
    { code: '+385', country: 'HR', label: '🇭🇷 +385', maxLength: 15 },
    { code: '+53', country: 'CU', label: '🇨🇺 +53', maxLength: 15 },
    { code: '+599', country: 'CW', label: '🇨🇼 +599', maxLength: 15 },
    { code: '+357', country: 'CY', label: '🇨🇾 +357', maxLength: 15 },
    { code: '+420', country: 'CZ', label: '🇨🇿 +420', maxLength: 9 },
    { code: '+45', country: 'DK', label: '🇩🇰 +45', maxLength: 8 },
    { code: '+253', country: 'DJ', label: '🇩🇯 +253', maxLength: 15 },
    { code: '+1767', country: 'DM', label: '🇩🇲 +1767', maxLength: 15 },
    { code: '+1809', country: 'DO', label: '🇩🇴 +1809', maxLength: 15 },
    { code: '+1829', country: 'DO', label: '🇩🇴 +1829', maxLength: 15 },
    { code: '+1849', country: 'DO', label: '🇩🇴 +1849', maxLength: 15 },
    { code: '+243', country: 'CD', label: '🇨🇩 +243', maxLength: 15 },
    { code: '+593', country: 'EC', label: '🇪🇨 +593', maxLength: 15 },
    { code: '+20', country: 'EG', label: '🇪🇬 +20', maxLength: 10 },
    { code: '+503', country: 'SV', label: '🇸🇻 +503', maxLength: 15 },
    { code: '+240', country: 'GQ', label: '🇬🇶 +240', maxLength: 15 },
    { code: '+291', country: 'ER', label: '🇪🇷 +291', maxLength: 15 },
    { code: '+372', country: 'EE', label: '🇪🇪 +372', maxLength: 15 },
    { code: '+268', country: 'SZ', label: '🇸🇿 +268', maxLength: 15 },
    { code: '+251', country: 'ET', label: '🇪🇹 +251', maxLength: 15 },
    { code: '+500', country: 'FK', label: '🇫🇰 +500', maxLength: 15 },
    { code: '+298', country: 'FO', label: '🇫🇴 +298', maxLength: 15 },
    { code: '+679', country: 'FJ', label: '🇫🇯 +679', maxLength: 15 },
    { code: '+358', country: 'FI', label: '🇫🇮 +358', maxLength: 10 },
    { code: '+33', country: 'FR', label: '🇫🇷 +33', maxLength: 9 },
    { code: '+594', country: 'GF', label: '🇬🇫 +594', maxLength: 15 },
    { code: '+689', country: 'PF', label: '🇵🇫 +689', maxLength: 15 },
    { code: '+262', country: 'TF', label: '🇹🇫 +262', maxLength: 15 },
    { code: '+241', country: 'GA', label: '🇬🇦 +241', maxLength: 15 },
    { code: '+220', country: 'GM', label: '🇬🇲 +220', maxLength: 15 },
    { code: '+995', country: 'GE', label: '🇬🇪 +995', maxLength: 15 },
    { code: '+49', country: 'DE', label: '🇩🇪 +49', maxLength: 11 },
    { code: '+233', country: 'GH', label: '🇬🇭 +233', maxLength: 15 },
    { code: '+350', country: 'GI', label: '🇬🇮 +350', maxLength: 15 },
    { code: '+30', country: 'GR', label: '🇬🇷 +30', maxLength: 10 },
    { code: '+299', country: 'GL', label: '🇬🇱 +299', maxLength: 15 },
    { code: '+1473', country: 'GD', label: '🇬🇩 +1473', maxLength: 15 },
    { code: '+590', country: 'GP', label: '🇬🇵 +590', maxLength: 15 },
    { code: '+1671', country: 'GU', label: '🇬🇺 +1671', maxLength: 15 },
    { code: '+502', country: 'GT', label: '🇬🇹 +502', maxLength: 15 },
    { code: '+44', country: 'GG', label: '🇬🇬 +44', maxLength: 15 },
    { code: '+224', country: 'GN', label: '🇬🇳 +224', maxLength: 15 },
    { code: '+245', country: 'GW', label: '🇬🇼 +245', maxLength: 15 },
    { code: '+592', country: 'GY', label: '🇬🇾 +592', maxLength: 15 },
    { code: '+509', country: 'HT', label: '🇭🇹 +509', maxLength: 15 },
    { code: '+504', country: 'HN', label: '🇭🇳 +504', maxLength: 15 },
    { code: '+852', country: 'HK', label: '🇭🇰 +852', maxLength: 8 },
    { code: '+36', country: 'HU', label: '🇭🇺 +36', maxLength: 9 },
    { code: '+354', country: 'IS', label: '🇮🇸 +354', maxLength: 15 },
    { code: '+91', country: 'IN', label: '🇮🇳 +91', maxLength: 10 },
    { code: '+62', country: 'ID', label: '🇮🇩 +62', maxLength: 11 },
    { code: '+98', country: 'IR', label: '🇮🇷 +98', maxLength: 10 },
    { code: '+964', country: 'IQ', label: '🇮🇶 +964', maxLength: 10 },
    { code: '+353', country: 'IE', label: '🇮🇪 +353', maxLength: 9 },
    { code: '+44', country: 'IM', label: '🇮🇲 +44', maxLength: 15 },
    { code: '+972', country: 'IL', label: '🇮🇱 +972', maxLength: 9 },
    { code: '+39', country: 'IT', label: '🇮🇹 +39', maxLength: 10 },
    { code: '+225', country: 'CI', label: '🇨🇮 +225', maxLength: 15 },
    { code: '+1876', country: 'JM', label: '🇯🇲 +1876', maxLength: 15 },
    { code: '+81', country: 'JP', label: '🇯🇵 +81', maxLength: 10 },
    { code: '+44', country: 'JE', label: '🇯🇪 +44', maxLength: 15 },
    { code: '+962', country: 'JO', label: '🇯🇴 +962', maxLength: 15 },
    { code: '+76', country: 'KZ', label: '🇰🇿 +76', maxLength: 15 },
    { code: '+77', country: 'KZ', label: '🇰🇿 +77', maxLength: 15 },
    { code: '+254', country: 'KE', label: '🇰🇪 +254', maxLength: 9 },
    { code: '+686', country: 'KI', label: '🇰🇮 +686', maxLength: 15 },
    { code: '+383', country: 'XK', label: '🇽🇰 +383', maxLength: 15 },
    { code: '+965', country: 'KW', label: '🇰🇼 +965', maxLength: 8 },
    { code: '+996', country: 'KG', label: '🇰🇬 +996', maxLength: 15 },
    { code: '+856', country: 'LA', label: '🇱🇦 +856', maxLength: 10 },
    { code: '+371', country: 'LV', label: '🇱🇻 +371', maxLength: 15 },
    { code: '+961', country: 'LB', label: '🇱🇧 +961', maxLength: 15 },
    { code: '+266', country: 'LS', label: '🇱🇸 +266', maxLength: 15 },
    { code: '+231', country: 'LR', label: '🇱🇷 +231', maxLength: 15 },
    { code: '+218', country: 'LY', label: '🇱🇾 +218', maxLength: 15 },
    { code: '+423', country: 'LI', label: '🇱🇮 +423', maxLength: 15 },
    { code: '+370', country: 'LT', label: '🇱🇹 +370', maxLength: 15 },
    { code: '+352', country: 'LU', label: '🇱🇺 +352', maxLength: 15 },
    { code: '+853', country: 'MO', label: '🇲🇴 +853', maxLength: 15 },
    { code: '+261', country: 'MG', label: '🇲🇬 +261', maxLength: 15 },
    { code: '+265', country: 'MW', label: '🇲🇼 +265', maxLength: 15 },
    { code: '+60', country: 'MY', label: '🇲🇾 +60', maxLength: 10 },
    { code: '+960', country: 'MV', label: '🇲🇻 +960', maxLength: 15 },
    { code: '+223', country: 'ML', label: '🇲🇱 +223', maxLength: 15 },
    { code: '+356', country: 'MT', label: '🇲🇹 +356', maxLength: 15 },
    { code: '+692', country: 'MH', label: '🇲🇭 +692', maxLength: 15 },
    { code: '+596', country: 'MQ', label: '🇲🇶 +596', maxLength: 15 },
    { code: '+222', country: 'MR', label: '🇲🇷 +222', maxLength: 15 },
    { code: '+230', country: 'MU', label: '🇲🇺 +230', maxLength: 15 },
    { code: '+262', country: 'YT', label: '🇾🇹 +262', maxLength: 15 },
    { code: '+52', country: 'MX', label: '🇲🇽 +52', maxLength: 10 },
    { code: '+691', country: 'FM', label: '🇫🇲 +691', maxLength: 15 },
    { code: '+373', country: 'MD', label: '🇲🇩 +373', maxLength: 15 },
    { code: '+377', country: 'MC', label: '🇲🇨 +377', maxLength: 15 },
    { code: '+976', country: 'MN', label: '🇲🇳 +976', maxLength: 8 },
    { code: '+382', country: 'ME', label: '🇲🇪 +382', maxLength: 15 },
    { code: '+1664', country: 'MS', label: '🇲🇸 +1664', maxLength: 15 },
    { code: '+212', country: 'MA', label: '🇲🇦 +212', maxLength: 9 },
    { code: '+258', country: 'MZ', label: '🇲🇿 +258', maxLength: 15 },
    { code: '+95', country: 'MM', label: '🇲🇲 +95', maxLength: 9 },
    { code: '+264', country: 'NA', label: '🇳🇦 +264', maxLength: 15 },
    { code: '+674', country: 'NR', label: '🇳🇷 +674', maxLength: 15 },
    { code: '+977', country: 'NP', label: '🇳🇵 +977', maxLength: 10 },
    { code: '+31', country: 'NL', label: '🇳🇱 +31', maxLength: 9 },
    { code: '+687', country: 'NC', label: '🇳🇨 +687', maxLength: 15 },
    { code: '+64', country: 'NZ', label: '🇳🇿 +64', maxLength: 9 },
    { code: '+505', country: 'NI', label: '🇳🇮 +505', maxLength: 15 },
    { code: '+227', country: 'NE', label: '🇳🇪 +227', maxLength: 15 },
    { code: '+234', country: 'NG', label: '🇳🇬 +234', maxLength: 10 },
    { code: '+683', country: 'NU', label: '🇳🇺 +683', maxLength: 15 },
    { code: '+672', country: 'NF', label: '🇳🇫 +672', maxLength: 15 },
    { code: '+850', country: 'KP', label: '🇰🇵 +850', maxLength: 15 },
    { code: '+389', country: 'MK', label: '🇲🇰 +389', maxLength: 15 },
    { code: '+1670', country: 'MP', label: '🇲🇵 +1670', maxLength: 15 },
    { code: '+47', country: 'NO', label: '🇳🇴 +47', maxLength: 8 },
    { code: '+968', country: 'OM', label: '🇴🇲 +968', maxLength: 8 },
    { code: '+92', country: 'PK', label: '🇵🇰 +92', maxLength: 10 },
    { code: '+680', country: 'PW', label: '🇵🇼 +680', maxLength: 15 },
    { code: '+970', country: 'PS', label: '🇵🇸 +970', maxLength: 15 },
    { code: '+507', country: 'PA', label: '🇵🇦 +507', maxLength: 15 },
    { code: '+675', country: 'PG', label: '🇵🇬 +675', maxLength: 15 },
    { code: '+595', country: 'PY', label: '🇵🇾 +595', maxLength: 15 },
    { code: '+51', country: 'PE', label: '🇵🇪 +51', maxLength: 15 },
    { code: '+63', country: 'PH', label: '🇵🇭 +63', maxLength: 10 },
    { code: '+64', country: 'PN', label: '🇵🇳 +64', maxLength: 15 },
    { code: '+48', country: 'PL', label: '🇵🇱 +48', maxLength: 9 },
    { code: '+351', country: 'PT', label: '🇵🇹 +351', maxLength: 9 },
    { code: '+1787', country: 'PR', label: '🇵🇷 +1787', maxLength: 15 },
    { code: '+1939', country: 'PR', label: '🇵🇷 +1939', maxLength: 15 },
    { code: '+974', country: 'QA', label: '🇶🇦 +974', maxLength: 8 },
    { code: '+262', country: 'RE', label: '🇷🇪 +262', maxLength: 15 },
    { code: '+40', country: 'RO', label: '🇷🇴 +40', maxLength: 10 },
    { code: '+73', country: 'RU', label: '🇷🇺 +73', maxLength: 10 },
    { code: '+74', country: 'RU', label: '🇷🇺 +74', maxLength: 10 },
    { code: '+75', country: 'RU', label: '🇷🇺 +75', maxLength: 10 },
    { code: '+78', country: 'RU', label: '🇷🇺 +78', maxLength: 10 },
    { code: '+79', country: 'RU', label: '🇷🇺 +79', maxLength: 10 },
    { code: '+250', country: 'RW', label: '🇷🇼 +250', maxLength: 15 },
    { code: '+590', country: 'BL', label: '🇧🇱 +590', maxLength: 15 },
    { code: '+290', country: 'SH', label: '🇸🇭 +290', maxLength: 15 },
    { code: '+247', country: 'SH', label: '🇸🇭 +247', maxLength: 15 },
    { code: '+1869', country: 'KN', label: '🇰🇳 +1869', maxLength: 15 },
    { code: '+1758', country: 'LC', label: '🇱🇨 +1758', maxLength: 15 },
    { code: '+590', country: 'MF', label: '🇲🇫 +590', maxLength: 15 },
    { code: '+508', country: 'PM', label: '🇵🇲 +508', maxLength: 15 },
    { code: '+1784', country: 'VC', label: '🇻🇨 +1784', maxLength: 15 },
    { code: '+685', country: 'WS', label: '🇼🇸 +685', maxLength: 15 },
    { code: '+378', country: 'SM', label: '🇸🇲 +378', maxLength: 15 },
    { code: '+239', country: 'ST', label: '🇸🇹 +239', maxLength: 15 },
    { code: '+966', country: 'SA', label: '🇸🇦 +966', maxLength: 9 },
    { code: '+221', country: 'SN', label: '🇸🇳 +221', maxLength: 15 },
    { code: '+381', country: 'RS', label: '🇷🇸 +381', maxLength: 15 },
    { code: '+248', country: 'SC', label: '🇸🇨 +248', maxLength: 15 },
    { code: '+232', country: 'SL', label: '🇸🇱 +232', maxLength: 15 },
    { code: '+65', country: 'SG', label: '🇸🇬 +65', maxLength: 8 },
    { code: '+1721', country: 'SX', label: '🇸🇽 +1721', maxLength: 15 },
    { code: '+421', country: 'SK', label: '🇸🇰 +421', maxLength: 15 },
    { code: '+386', country: 'SI', label: '🇸🇮 +386', maxLength: 15 },
    { code: '+677', country: 'SB', label: '🇸🇧 +677', maxLength: 15 },
    { code: '+252', country: 'SO', label: '🇸🇴 +252', maxLength: 15 },
    { code: '+27', country: 'ZA', label: '🇿🇦 +27', maxLength: 9 },
    { code: '+500', country: 'GS', label: '🇬🇸 +500', maxLength: 15 },
    { code: '+82', country: 'KR', label: '🇰🇷 +82', maxLength: 10 },
    { code: '+211', country: 'SS', label: '🇸🇸 +211', maxLength: 15 },
    { code: '+34', country: 'ES', label: '🇪🇸 +34', maxLength: 9 },
    { code: '+94', country: 'LK', label: '🇱🇰 +94', maxLength: 9 },
    { code: '+249', country: 'SD', label: '🇸🇩 +249', maxLength: 15 },
    { code: '+597', country: 'SR', label: '🇸🇷 +597', maxLength: 15 },
    { code: '+4779', country: 'SJ', label: '🇸🇯 +4779', maxLength: 15 },
    { code: '+46', country: 'SE', label: '🇸🇪 +46', maxLength: 9 },
    { code: '+41', country: 'CH', label: '🇨🇭 +41', maxLength: 9 },
    { code: '+963', country: 'SY', label: '🇸🇾 +963', maxLength: 15 },
    { code: '+886', country: 'TW', label: '🇹🇼 +886', maxLength: 9 },
    { code: '+992', country: 'TJ', label: '🇹🇯 +992', maxLength: 15 },
    { code: '+255', country: 'TZ', label: '🇹🇿 +255', maxLength: 15 },
    { code: '+66', country: 'TH', label: '🇹🇭 +66', maxLength: 9 },
    { code: '+670', country: 'TL', label: '🇹🇱 +670', maxLength: 15 },
    { code: '+228', country: 'TG', label: '🇹🇬 +228', maxLength: 15 },
    { code: '+690', country: 'TK', label: '🇹🇰 +690', maxLength: 15 },
    { code: '+676', country: 'TO', label: '🇹🇴 +676', maxLength: 15 },
    { code: '+1868', country: 'TT', label: '🇹🇹 +1868', maxLength: 15 },
    { code: '+216', country: 'TN', label: '🇹🇳 +216', maxLength: 15 },
    { code: '+90', country: 'TR', label: '🇹🇷 +90', maxLength: 10 },
    { code: '+993', country: 'TM', label: '🇹🇲 +993', maxLength: 15 },
    { code: '+1649', country: 'TC', label: '🇹🇨 +1649', maxLength: 15 },
    { code: '+688', country: 'TV', label: '🇹🇻 +688', maxLength: 15 },
    { code: '+256', country: 'UG', label: '🇺🇬 +256', maxLength: 15 },
    { code: '+380', country: 'UA', label: '🇺🇦 +380', maxLength: 9 },
    { code: '+971', country: 'AE', label: '🇦🇪 +971', maxLength: 9 },
    { code: '+44', country: 'GB', label: '🇬🇧 +44', maxLength: 10 },
    { code: '+1', country: 'US', label: '🇺🇸 +1', maxLength: 10 },
    { code: '+268', country: 'UM', label: '🇺🇲 +268', maxLength: 15 },
    { code: '+1340', country: 'VI', label: '🇻🇮 +1340', maxLength: 15 },
    { code: '+598', country: 'UY', label: '🇺🇾 +598', maxLength: 15 },
    { code: '+998', country: 'UZ', label: '🇺🇿 +998', maxLength: 15 },
    { code: '+678', country: 'VU', label: '🇻🇺 +678', maxLength: 15 },
    { code: '+3906698', country: 'VA', label: '🇻🇦 +3906698', maxLength: 15 },
    { code: '+379', country: 'VA', label: '🇻🇦 +379', maxLength: 15 },
    { code: '+58', country: 'VE', label: '🇻🇪 +58', maxLength: 15 },
    { code: '+84', country: 'VN', label: '🇻🇳 +84', maxLength: 10 },
    { code: '+681', country: 'WF', label: '🇼🇫 +681', maxLength: 15 },
    { code: '+2125288', country: 'EH', label: '🇪🇭 +2125288', maxLength: 15 },
    { code: '+2125289', country: 'EH', label: '🇪🇭 +2125289', maxLength: 15 },
    { code: '+967', country: 'YE', label: '🇾🇪 +967', maxLength: 15 },
    { code: '+260', country: 'ZM', label: '🇿🇲 +260', maxLength: 15 },
    { code: '+263', country: 'ZW', label: '🇿🇼 +263', maxLength: 15 },
];

const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    countryCode,
    onCountryCodeChange,
    placeholder = "98765 43210",
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCodes = countryCodes.filter(c =>
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative flex items-center w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl transition-all focus-within:border-brand-medium focus-within:ring-2 focus-within:ring-brand-medium/20 ${className}`}>
            <div className="relative shrink-0 border-r border-slate-200 dark:border-white/10" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 py-4 pl-2.5 pr-2 outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer rounded-l-2xl shrink-0 h-full text-xs"
                >
                    <span className="text-sm leading-none">{selectedCountry.label.split(' ')[0]}</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none">{countryCode}</span>
                    <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-2 w-64 max-h-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col"
                        >
                            {/* Search Box */}
                            <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Search country..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl py-2 pl-9 pr-3 outline-none focus:border-brand-medium/50 transition-all text-xs text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Scrollable List with Fade Masks */}
                            <div className="relative flex-1 min-h-0 flex flex-col">
                                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-900 to-transparent z-10 pointer-events-none flex items-start justify-center pt-1">
                                    <ChevronDown className="w-3 h-3 text-slate-300 rotate-180" />
                                </div>
                                
                                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar scroll-smooth">
                                    {filteredCodes.length > 0 ? (
                                        filteredCodes.map((c) => (
                                            <button
                                                key={`${c.country}-${c.code}`}
                                                type="button"
                                                onClick={() => {
                                                    onCountryCodeChange(c.code);
                                                    setIsOpen(false);
                                                    setSearchQuery('');
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group/item ${countryCode === c.code ? 'bg-brand-medium/5 text-brand-medium' : 'text-slate-700 dark:text-slate-300'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl group-hover/item:scale-110 transition-transform">{c.label.split(' ')[0]}</span>
                                                    <div className="flex flex-col -space-y-0.5">
                                                        <span className="text-[10px] font-bold uppercase tracking-tight opacity-50">{c.country}</span>
                                                        <span className="text-xs font-bold">{c.label.split(' ')[1]}</span>
                                                    </div>
                                                </div>
                                                {countryCode === c.code ? (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-medium shadow-[0_0_8px_rgba(57,148,250,0.5)]" />
                                                ) : (
                                                    <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                )}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="py-12 text-center space-y-2">
                                            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                                                <Search className="w-5 h-5 text-slate-300" />
                                            </div>
                                            <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">No results found</p>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10 pointer-events-none flex items-end justify-center pb-1">
                                    <ChevronDown className="w-3 h-3 text-slate-300" />
                                </div>
                            </div>

                            <style jsx>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: transparent;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: rgba(156, 163, 175, 0.2);
                                    border-radius: 20px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: rgba(156, 163, 175, 0.4);
                                    }
                            `}</style>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative flex-1 h-full">
                <input
                    required
                    type="tel"
                    value={value || ''}
                    maxLength={selectedCountry.maxLength || 15}
                    onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, '');
                        if (numericValue.length <= (selectedCountry.maxLength || 15)) {
                            onChange(numericValue);
                        }
                    }}
                    placeholder={placeholder}
                    className="w-full bg-transparent py-4 px-5 outline-none text-sm font-medium text-slate-700 dark:text-slate-200 rounded-r-2xl placeholder:text-slate-400"
                />
            </div>
        </div>
    );
};

export default PhoneInput;
