<h1>TODO TASK</h1>
<ul>
  <li>In this i have craeted this using html,css and bootstrap for design the cards</li>
  <li>In this i craeted task name and task description when you click the add button task added in the task i just use value to get the value and i set the e.target value to e.taget.name and i added to the task then i craeted the function add task to set the value to the tododetails and i set the todotask to inital value to feed old data</li>
  <li>Then i give the button to delete the task  i get the id oncick and i filter the id and store the data except that id and settododetails by this selected task will deleted</li>
  <i>Them i created the edit button to edit the task i created the loadeditbutton function i passed to editbutton and get the name,description and id and set to the seteditstate after i set the data to todotask to fill the value in input area i use useeffect to check the changes in todotask when any changes made in todotask it automatically editstate value set in todotask after i changed the value then i have to edit the value in cards so i call the function in addtodotask when editstate is true it update the value else the new task will added in the editbutton function i get two values values in editstate and id i use findindex to find rthe index of that task then i spread the task value by tododetails[index] and i replace the value in the object and i saved in the variable and i set to the settododetails to edit the value</i>
  <li>Then i have filter the task by All,Completed,Not completed for this i have used two state to change the tododetails and i use filtertodo to save the save value in tododetails i access the filtertodo to filter the completed and not completed the task and set to settododtask to see the result</li>
</ul>
