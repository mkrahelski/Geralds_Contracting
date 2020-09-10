//Project : Generate a Total 2BY4 calc



function FindTotalLumber(length:number, width:number):any
    
    {
        let _lengthOf2BY4 = 8;
        //length of 2BY4 in this case it's 8 feet.


        let _TotalLumberFloorPerimeter = (length*2 + width*2);
        let _TotalLumberCeilingPerimeter = (length*2 +width*2);

        //each of these would be equal 2 the length of the length*2+width*2, the number we get back will be in feet


        let _2by4verticalLength = ((length*2)/1.3333);
        let _2by4verticalWidth = ((width*2)/1.3333);

        //Length is *2 to cover the full perimeter of a  square or rectangle 
        //1.3 feet or 16 inches to generate the amount of possible 2By4 locations
       

        let _totalVertical2BY4 = ((_2by4verticalLength + _2by4verticalWidth)*8);
        
        //the total amount of boards has been added by this stage, each board is 8 feet long. thus to return to feet we multiple by 8 

        let _TotalLumberNeeded = (_TotalLumberFloorPerimeter + _TotalLumberCeilingPerimeter +_totalVertical2BY4);

        //adding them together to generate a total amount of lumber in feet


        let _TotalLumberPlusTenPM =((_TotalLumberNeeded*(10/100))+_TotalLumberNeeded)/_lengthOf2BY4;
      
        //addition of the previous total +10% of that total on top. Combined for the sake of brevity.
        //these variable names are gonna be the death of me.
        
        
        return Math.round(_TotalLumberPlusTenPM)+" Final Result";
        //returns rounded +the extra material
    }


//Objective Return Total Lumber Required for a given Job    .
    //there was no clarification needed to generate returns per each wall. Though the function can be partioned to generate those outputs.




//Practical Test - Example

let _testExample = FindTotalLumber(8,8);
    console.log(_testExample);

//ANS is 35
//math seems reasonable
//there does not seem any explicit errors
//I ran console.log post each operation, unsure where it went wrong.
    //removed for the sake of clarity
//I have cleaned up the code multiple times, console.log seems to be accurate.
//The error is not technical but most likely in my methodology that is if there is an error.
//unsure if related to ("16” sections, is 5.375, rounded up to 6") alteration


//At any rate some more examples.


let _testExampleTwo = FindTotalLumber(12,12);
    console.log(_testExampleTwo);
//ans = 53
let _testExampleThree = FindTotalLumber(12,85);
    console.log(_testExampleThree);
//ans = 213