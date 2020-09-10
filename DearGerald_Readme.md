### Gerald's Calculator

-----

![Gerald](https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg "Logo Title Text 1")




### How to use this application 

Dear Gerald, 

To run this application, pass in the `width` and the `length`.

-----

Example:
``````
    Node dist/index.js -w 8 -l 8
``````
Note : 
* The `Width` of the house  follows -w, 
* And the `length` of the house follows -l
* Don't worry about Node dist/index.js enter it without a thought.

----------- 




#### Scenario Summary
This assignment is designed to have you demonstrate your newly learned skills from your first two classes in the “Developing Software: Introduction” course. You will be using all of the live coding skills that you were taught.

Outcome of the finished project will be a small command line interface (CLI) program, written in TypeScript, compiled to JavaScript. Once you have completed your program, compress the contents of your working folder (the folder you wrote your program in) by turning it into a .zip file (or other compression type) which will be submitted as the result of the assignment in teams.

##  __Scenario__

Gerald owns a construction company and builds single room homes. He can quickly create a rectangular house, usually within one day. He has found, however, that he spends a good amount of time calculating how much lumber he needs to buy for the walls.
Each corner of the house has a single 4x4 beam that walls can be nailed into and the trusses for the roof come pre-assembled. The only materials that Gerald needs to bring with him are the 2x4’s.
Gerald has decided to commission you to build him a simple application to calculate the number of 2x4’s he needs to buy so that he doesn’t have to make two trips to the store, but doesn’t buy too much. He’s given us the following information to help us calculate:


* Each wall has 2x4’s flat against the floor for the length of the edge of a wall.

* Each wall has vertical 2x4’s spaced 16 inches apart (measured from outside edge of a board to the next outside edge; the board is included in the 16 inches)

*	Each wall has 2x4’s flat against the ceiling for the length of the edge of a wall.

*	Gerald buys 10% MORE than a perfect calculation to account for waste.

*	Gerald notes that you can’t purchase a partial piece of lumber, so round up a decimal in the final calculation

*   2x4’s are actually 1.5" x 3.5”

*	4x4’s are actually 3.5” x 3.5”

*	Gerald only buys 8’ 2x4’s

-----

## Gerald gave us an example with the expected output as well, using an 8’ by 8’ house:

----

#### __Example__


1.  Each wall is the same size in this case

2.  Each wall has two beams, totaling 7”, so the space in between is 7’ 5”.

3.  Each wall required one 2x4 on the top, bottom, and sides

4.  The remaining space across, broken into 16” sections, is 5.56, rounded up to 6.

5. Total: 10 boards per wall, 40 boards for this house.
Assignment

-----

Create an application that returns the number of 2x4’s required to purchase from a lumber yard for a single job.
Marking Criteria
Each application will be graded for how it is written:
* Was the code organized into functions?
	
* Did a function do one job?

* Was repetitive code moved into a function?

*   Was the code neat?

*   Were comments used?
*   Were variables declared properly?
*   Were variables used properly?
*   Did the application return the correct number of boards?

                                                                                                                                                       

---------------


#### Table to capture test log.
| House Measurement | Studs Required | Application Returns| Last Test By |
|-------------------|----------------|--------------------|--------------|
| 8x8               |    40          | 35                 |    MK        |
| 12x12             | Unkown         | 53                 |    MK        |
| 12x85             |Unkown          | 213                |    MK        |

------

### Note to other developers

[yargs package]: https://www.npmjs.com/package/yargs