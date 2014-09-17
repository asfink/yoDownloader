// Yo this is how things happen

// First we need something to happen when the page loads

$(document).ready(function(){

    // This stuff happens when the page loads - Yes.
    
    // Let's look at how chrome.storage.hh.wlocal.get works
    // So this says sup local storage, get me this name. once it's retrieved, do a function.
    // This function will have an argument. we name is 'result' here. but it's arbitrary, really
    chrome.storage.local.get('name', function (result) {
        // You should inspect the arguments in the debugger if you want, just to make sure you know what you're getting
        var name = result.name 
        
        // Cool, now we have the name
        // Find the input that you want, in this case <input name="name" placeholder="name">
        // Find the element using some selector. We can do something with jQuery like:
        var $nameInput = $("input[name='name']");
        
        // I put a $ in front of the variable name just so that you know it's a jQuery object (just code style)
        
        // Now we can populate the input.
        
        $nameInput.val(name);
        
        // Yay
        
        // You could also do something simpler, like
        
        $("input[name='name']").val(result.name); // In one line
        
        //ohhhhhh ok i get it now
        // thank you! I've been strugglebussing with trying to figure this out. 
        // what does the input part of the "input[name='name']" signify?
        //at it's an input field?

        // jQuery takes selectors. in this case, input is a selector for a tag name.
        // .foo (period in front) means it's a class
        // #foo (hashtag in front) means it's an id
        // foo (nothing) means it's a tagname
        // Note, when jQuery does a select, make sure it's specific enough.
        // If you do something like $('p'), the thing returned is a list of ALL paragraph tags.
        // In this case, doing "input[name='name']" returns an array of only one (assuming you were specific enough)
        // If you had more inputs with the same name attribute, then you'd get an array of more than one, and setting val('foo')
        // would set foo to every input with that attribute.
        
        // Cheers,
        // Edwin
        
        //THANK YOU!!! 
        
        // Also, make sure you're familiar with the dev console. it is SUPER helpful.
        // inserting a 'debugger' at any line will stop the execution at that point and you can play around with values/variables in the console, and then you can continue at any time
                
        //ok. (otherwise, console.log is like a print statement. also useful.)
        //yes
    }



})