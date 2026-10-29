'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { BookingFormData } from '../../types';

interface BookingSectionProps {
  initialProgram?: string;
  initialChallenge?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialProgram = "1:1 Executive Advisory",
  initialChallenge = "",
  isModal = false,
  onSuccess
}) => {
  // Available days generator (next working days)
  const availableDates = [
    { label: "Thu, Oct 29", value: "2026-10-29", slots: ["10:00 AM", "03:30 PM", "05:00 PM"] },
    { label: "Fri, Oct 30", value: "2026-10-30", slots: ["09:30 AM", "11:30 AM", "04:00 PM"] },
    { label: "Mon, Nov 02", value: "2026-11-02", slots: ["10:30 AM", "12:00 PM", "03:00 PM", "05:30 PM"] },
    { label: "Tue, Nov 03", value: "2026-11-03", slots: ["09:00 AM", "11:00 AM", "04:30 PM"] },
    { label: "Wed, Nov 04", value: "2026-11-04", slots: ["10:00 AM", "02:30 PM", "04:00 PM"] },
  ];

  const [selectedDate, setSelectedDate] = useState(availableDates[0].value);
  const [selectedSlot, setSelectedSlot] = useState(availableDates[0].slots[0]);
  const [formData, setFormData] = useState<BookingFormData>({
    date: availableDates[0].value,
    timeSlot: availableDates[0].slots[0],
    name: "",
    email: "",
    company: "",
    role: "",
    objective: initialChallenge,
    programOfInterest: initialProgram
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentSlots = availableDates.find(d => d.value === selectedDate)?.slots || [];

  const handleDateChange = (dateVal: string) => {
    setSelectedDate(dateVal);
    const dayObj = availableDates.find(d => d.value === dateVal);
    if (dayObj && dayObj.slots.length > 0) {
      setSelectedSlot(dayObj.slots[0]);
      setFormData(prev => ({ ...prev, date: dateVal, timeSlot: dayObj.slots[0] }));
    }
  };

  const handleSlotChange = (slotVal: string) => {
    setSelectedSlot(slotVal);
    setFormData(prev => ({ ...prev, timeSlot: slotVal }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const generateIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aura Advisory//Executive Advisory//EN
BEGIN:VEVENT
SUMMARY:Confidential Strategy Discovery: ${formData.name} & Dr. Elena Valenzuela
DESCRIPTION:Executive strategic diagnosis and advisory alignment session.
DTSTART:${formData.date.replace(/-/g, '')}T150000Z
DURATION:PT45M
LOCATION:Private Video Room (video.aura-advisory.com/exec-session)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Aura-Advisory-Session-${formData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={isModal ? "" : "py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"} id="booking">
      
      {!isModal && (
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            06 · Strategic Discovery Calendar
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 break-words leading-tight">
            Schedule a 45-minute confidential discovery session.
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-stone-600 dark:text-stone-300 font-light">
            A direct conversation with zero sales middlemen to assess your strategic friction, evaluate compatibility, and determine if an advisory partnership is the right catalyst for your goals.
          </p>
        </div>
      )}

      {/* Main Booking Container */}
      <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 overflow-hidden shadow-xs">
        {!bookingConfirmed ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200 dark:divide-stone-800">
            
            {/* Left Column: Meeting Details & Interactive Slot Selection (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 space-y-5 sm:space-y-6 bg-stone-100/50 dark:bg-stone-950/40">
              
              <div className="space-y-1.5">
                <span className="text-2xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Dr. Elena Valenzuela
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100 break-words">
                  Strategic Discovery Session
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    45 Minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 shrink-0" />
                    Private Video Call
                  </span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-stone-900 dark:text-stone-100 block">
                  1. Select an available business day:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {availableDates.map((dateObj) => (
                    <button
                      key={dateObj.value}
                      type="button"
                      onClick={() => handleDateChange(dateObj.value)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        selectedDate === dateObj.value
                          ? 'border-stone-900 dark:border-stone-100 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 shadow-xs'
                          : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-700'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <CalendarIcon className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                        <span className="truncate">{dateObj.label}</span>
                      </span>
                      <span className="text-2xs text-stone-400 shrink-0 ml-1">
                        {dateObj.slots.length} slots
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-stone-900 dark:text-stone-100 block">
                  2. Select your preferred time window:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                  {currentSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleSlotChange(slot)}
                      className={`py-2 px-2.5 text-center rounded-lg text-xs font-mono font-medium transition-all cursor-pointer truncate ${
                        selectedSlot === slot
                          ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                          : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-1 text-2xs text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Protected by mutual legal NDA confidentiality</span>
              </div>

            </div>

            {/* Right Column: Intake Questionnaire Form (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">
                    Executive Profile & Strategic Context
                  </h4>
                  <p className="text-2xs sm:text-xs text-stone-500">
                    This brief information allows Dr. Valenzuela to review your context ahead of the call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                      Corporate Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your venture or scaleup"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                      Current Role / Title *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="CEO, Founder, CTO, VP..."
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                    Program of Highest Interest
                  </label>
                  <select
                    value={formData.programOfInterest}
                    onChange={e => setFormData({ ...formData, programOfInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="1:1 Executive Advisory">1:1 Executive Advisory</option>
                    <option value="Organizational Scaling Strategy">Organizational Scaling Strategy</option>
                    <option value="High Performance & Team Alignment">High Performance & Team Alignment</option>
                    <option value="C-Level Transition Sprints (First 100 Days)">C-Level Transition Sprints (First 100 Days)</option>
                    <option value="Strategic Clarity Sprint (One-Off)">Strategic Clarity Sprint (One-Off)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
                    What is your primary operational bottleneck right now? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe in 1-2 sentences..."
                    value={formData.objective}
                    onChange={e => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-medium text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-xl active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs text-center"
                  >
                    {isSubmitting ? (
                      <span>Reserving session slot...</span>
                    ) : (
                      <>
                        <span className="break-words">Confirm Session ({formData.date} at {formData.timeSlot})</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-6 sm:p-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-800 dark:text-amber-400">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-1.5 max-w-lg mx-auto">
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 break-words">
                Discovery Session Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light break-words">
                We have dispatched the calendar invitation and video conference coordinates to <strong className="font-semibold text-stone-900 dark:text-stone-100">{formData.email}</strong>.
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl bg-stone-100 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between py-1 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500">Date:</span>
                <span className="text-stone-900 dark:text-stone-100 font-medium">{formData.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500">Time:</span>
                <span className="text-stone-900 dark:text-stone-100 font-medium">{formData.timeSlot} (45 min)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500">Video Link:</span>
                <span className="text-amber-700 dark:text-amber-400 font-medium truncate">video.aura-advisory.com/exec-session</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Lead Advisor:</span>
                <span className="text-stone-900 dark:text-stone-100 truncate">Dr. Elena Valenzuela (MCC)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={generateIcsFile}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-900 dark:text-stone-100 bg-stone-200/70 hover:bg-stone-300/70 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-lg cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Download .ICS Calendar Event</span>
              </button>

              <button
                onClick={() => setBookingConfirmed(false)}
                className="text-xs text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 underline cursor-pointer px-3 py-2"
              >
                Book another date
              </button>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};
