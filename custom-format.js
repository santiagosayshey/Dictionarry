function codeBlockName(name) {
  var header = document.getElementById("cf-block-name")
  header.innerText = name+":";
  populateCodeBlock(name);
}

function populateCodeBlock(name) {
  var block = document.getElementById("block-json").innerHTML = JSON.stringify(MA,null,' ');
}

var MA = {
  "name": "Movies Anywhere",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "name": "Movies Anywhere",
      "implementation": "ReleaseTitleSpecification",
      "negate": false,
      "required": true,
      "fields": {
        "value": 
	        "(?&lt!dts[ .-]?hd[ .-]?)ma\\b(?=.*\\bweb[ ._-]?(dl|rip)\\b)"
      }
    }
  ]
};
