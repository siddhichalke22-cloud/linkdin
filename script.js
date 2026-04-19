// This function runs when someone clicks a "Like" button
function increaseLike(buttonElement) {
    // 1. Find the <span> element inside the button that holds the number
    let countSpan = buttonElement.querySelector('.count');
    
    // 2. Get the current number from the text of that span
    let currentCount = parseInt(countSpan.innerText);
    
    // 3. Increase the number by 1
    let newCount = currentCount + 1;
    
    // 4. Update the text on the screen with the new number
    countSpan.innerText = newCount;
    
    // Optional: Add a little console log to help see what's happening
    console.log("Post Liked! New count is: " + newCount);
}

// Adding interactivity to the "Start a post" box
const postBox = document.getElementById('postBox');

// We listen for a 'click' event on the post box
postBox.addEventListener('click', function() {
    // Show a simple alert message to the user
    alert("Post feature is coming soon! This is just a clone project.");
});

// Beginner Tip:
// 'document.getElementById' is used once to find an element with a specific ID.
// 'querySelector' is used to find an element inside another element.
