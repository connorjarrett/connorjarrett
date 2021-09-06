var r = document.querySelector(':root');
var rs = getComputedStyle(r);

const lightDarkToggle = document.getElementById("lightdark")

window.onload = function() {
    toggleLightDark() // Update colour scheme on startup
}

function toggleLightDark() {
    if (rs.getPropertyValue('--background-header') == 'rgb(41, 41, 41)') { // Check colour
        // Set colours  - To light mode //
        r.style.setProperty('--background-header', 'rgb(240, 240, 240)')
        r.style.setProperty('--navbar-colour', 'rgb(41, 41, 41)')
        r.style.setProperty('--primary-font-colour', 'rgb(10, 10, 10)')
        r.style.setProperty('--navbar-font-colour', 'rgb(255, 255, 255)')
        r.style.setProperty('--accent1', 'rgb(244, 255, 85)')
        r.style.setProperty('--secondary-font-colour', 'rgb(50, 50, 50)')
        
        // Animation //
        lightDarkToggle.style.transform = "rotate(" + 180 + "deg)";
        lightDarkToggle.style.color = "rgb(0,0,0);"
        lightDarkToggle.innerHTML = "brightness_4"

    } else {
        // Set Colours - To dark mode //
        r.style.setProperty('--navbar-colour', 'rgb(240, 240, 240)')
        r.style.setProperty('--background-header', 'rgb(41, 41, 41)')
        r.style.setProperty('--primary-font-colour', 'rgb(255, 255, 255)')
        r.style.setProperty('--navbar-font-colour', 'rgb(10, 10, 10)')
        r.style.setProperty('--accent1', 'rgb(135, 40, 224)')
        r.style.setProperty('--secondary-font-colour', 'rgb(119, 119, 119)')

        // Animation //
        lightDarkToggle.style.transform = "rotate(" + 0 + "deg)";
        lightDarkToggle.style.color = "rgb(10,0,0);"
        lightDarkToggle.innerHTML = "brightness_5"
    }

    
}