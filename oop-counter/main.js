$(document).ready(loadWhenReady);

function loadWhenReady(){
    var addCounter = new CounterDisplay(2, "#target"); 
    addCounter.counterElements(); 
}
class CounterDisplay{
    constructor (startingNumber, targetDiv){
        this.startingNumber = startingNumber;
        this.targetDiv = targetDiv; 

        this.counterContainer = null;
        this.outPutDisplay = null;
        this.subtractButton = null;
        this.addButton = null; 

        this.clickHandler = this.clickHandler.bind(this);
    }

    counterElements() {

        this.counterContainer = $("<div>")
            .addClass("countContainer");
        this.appendDivs(this.targetDiv, this.counterContainer);

        this.addButton = $("<button>")
            .addClass("adding")
            .click(this.clickHandler)
            .text("add");
        this.appendDivs(this.counterContainer, this.addButton);

        this.outPutDisplay = $("<output>")
            .text(this.startingNumber);
        this.appendDivs(this.counterContainer, this.outPutDisplay);

        this.subtractButton = $("<button>")
            .click(this.clickHandler)
            .addClass("subtracting")
            .text("sub");
        this.appendDivs(this.counterContainer, this.subtractButton);

    }

    appendDivs(targetToAppTo, elmToAppend){
        $(targetToAppTo).append(elmToAppend);
    }

    clickHandler(event){
        // var operatorCheck = event.currentTarget.hasClass();
        
        var testing = event.target;
        testing = $(testing).attr("class");
        console.log("test ", testing)

        if (testing === "adding"){
        this.startingNumber++;
        console.log("Add Button! ", this.startingNumber)
        this.outPutDisplay.text(this.startingNumber);
        } else if (testing === "subtracting")
        
            this.startingNumber--;
            this.outPutDisplay.text(this.startingNumber);
      console.log("Add Button! ", this.startingNumber)
        return console.log("returned ",event.target); 
    }
}
