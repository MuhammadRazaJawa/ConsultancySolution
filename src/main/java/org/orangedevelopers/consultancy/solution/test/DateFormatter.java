package org.orangedevelopers.consultancy.solution.test;

import java.util.Date;

public class DateFormatter
{
    private static final String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
 
    public String getCurrentDate()
    {
        return new Date().toString();
    }
}