2.Create a webpage with a 16x16 grid of square divs.

    I.) Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
    
    II.) It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
    
    III.) There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
        i.) float/clear
        ii.) inline-block
        iii.) flexbox
        iv.) CSS Grid

    IV.) Be careful with borders and margins, as they can adjust the size of the squares!

    V.) “OMG, why isn’t my grid being created???”
            i.) Did you link your CSS stylesheet?
            ii.) Open your browser’s developer tools.
            iii.) Check if there are any errors in the JavaScript console.
            iv.) Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
            v.) Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.


3)Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    I.)Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
    II.)There are multiple ways to change the color of the divs, including:
            i.) adding a new class to the div.
            ii.) changing the div’s background color using JavaScript. 

4.) Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing  that we want to prevent.
    
    I.)Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    II.)Also check out prompts.
    III.)You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.