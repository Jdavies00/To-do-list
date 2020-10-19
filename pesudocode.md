link to wire frame https://github.com/bootcamp-students/Resources/blob/master/images/wireframes/to-do-list.gif

Requirements
To complete the assignment, you must complete the following:
Dynamically Render the content with React using components
Use Local Storage to store all to-do list data in the browser
Display all to-do list items
Three "views" for the user: All, Completed, & To-Do (not 
completed)

Display Prompting text to add item



 




           **Wire frame deconsrtrcut**


TODO title at top of page
off grey background
 centered under title is text input bar 

**Display Prompting text to add item**
    adding items
        user should be able to add item to text feild 
            text feild is at top of page
        on buttton press add text from feild to a list
            each added item should be added under the text input feild
        list remains displayed on page
        able to continue to add items to list
            added items expand down the page
            each item is a ul and will need to e an oject with a default status of active 
        
**See number of remaining items**
    items with active.state are counted and total number is displaye on page
    ?could maybe have total number of completed items on page?

**Cross out or check off one item as "completed"**
    completing items 
        create check box next to each item
            if checked then item is strikethrough 
            but remains on the page
                until onbutton press strikehrught items are moved to completed list
                once completed the item moves to a sperate list called 'completed' != archived
        .split () to create mutable list

**Check off or cross out all items in one click as a "completed all" function**
**Ability to press a button and all checked off items become active again**
    both the above reqs could be done with a 'for all' button 
        'for all' has 2 options: complete all active items on list
        'restore all' to bring back al items from both archived and completed

**Remove one item (soft delete / archive)**
    button to soft delete an item to not delete an item but just 
    strike through item on the list will act as soft delete
    archive is own list that accept any item regadless of active or not

        

