package org.orangedevelopers.consultancy.solution.test;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Locale;

import ognl.ParseException;

import org.springframework.format.Formatter;

public class SqlTimestampFormatter implements Formatter<Timestamp> { 

    private static final String TIMESTAMP_FORMAT = "dd/MM/yyyy HH:mm"; 

    @Override 
    public String print(Timestamp time, Locale locale) { 
        SimpleDateFormat sdf = new SimpleDateFormat(TIMESTAMP_FORMAT, locale); 
        return sdf.format(time); 
    } 

    @Override 
    public Timestamp parse(String timeStr, Locale locale) throws java.text.ParseException { 
        SimpleDateFormat sdf = new SimpleDateFormat(TIMESTAMP_FORMAT); 
        return new Timestamp(sdf.parse(timeStr).getTime()); 
    } 
} 
