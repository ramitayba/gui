/*
 * Stormcloud IDE - stormcloud/_base/context
 * 
 * Copyright (C) 2012 - 2013 Stormcloud IDE
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the 
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public 
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * 
 */
define([], 
    function(
        ){
    
        // module       : stormcloud/_base/context
        // 
        // summary      : Defines the application context
        // 
        // description  : This module defines the application wide scope contextual variables:
        //		
        //		- Stormcloud API Base URL
        //		- Loaded Projects
        //		- ...
    
        return {

            // 
            host     : 'localhost',
        
            //
            protocol : 'http',
        
            //
            apiUrl   : '/stormcloud/api/',
            getApiUrl : function(){
            
                return this.protocol + '://' + this.host + this.apiUrl;
            },
            
            // The item currently selected in the tree.
            selectedTreeItem : null,

            // The project in which the selectedTreeItem resides.
            selectedProject : null,

            availableProjects : [],

            // contents of a file busy opening.
            fileContents : null,

            // source and destination for copy action
            copySource : null,
            copyDestination : null,

            // source and destination for move action
            moveSource : null,
            moveDestination : null,

            // Array holding recently opened projects
            recentProjects : new Array(),

            // Array holding any changed / edited files
            changedFiles : new Array()
    
        };

    });