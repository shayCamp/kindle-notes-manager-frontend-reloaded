import React, { useEffect, useState } from 'react';
import { AllHighlights } from './Interface';

function CalenderFunctions() {
    //Setting start date to a year before today
    function shiftDate(date: Date, numDays: number) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + numDays);
        return newDate;
    }

    return {
        shiftDate,
    };
}

export default CalenderFunctions;
