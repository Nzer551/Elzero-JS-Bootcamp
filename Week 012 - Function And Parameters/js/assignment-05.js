// Lessons from 56>>>63 Assignments
// Assignment 5

// Method 1
function createSelectBox(startYear, endYear) {
    document.write("<select>");
    while(startYear <= endYear) {
      document.write('<option value="',startYear, '">', startYear, "</option>");
      startYear++;
    }
    document.write("</select>");
  }
  createSelectBox(2000, 2021);
  
  // Method 2
  function createSelectBox(startYear, endYear) {
    let selectBox = ``;
    
    while(startYear <= endYear) {
      selectBox += `<option value="${startYear}">${startYear}</option>`;
      startYear++;
    }
    document.write("<select>", selectBox, "</select>");
  }
  createSelectBox(2000, 2021);
