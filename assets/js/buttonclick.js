document.addEventListener('DOMContentLoaded', function() {
    const typeButton = document.getElementById('typedesign-b');
    const letteringButton = document.getElementById('lettering-b');
    const gridType = document.getElementById('grid-type');
    const gridLettering = document.getElementById('grid-lettering');
    let msnry;

    function initMasonry(grid) {
        imagesLoaded(grid, function() {
            if (msnry) {
                msnry.destroy();
            }
            msnry = new Masonry(grid, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });
            msnry.layout();
        });
    }

    function switchGrid(showGrid, hideGrid) {
        hideGrid.style.display = 'none'; // Hide the currently visible grid
        showGrid.style.display = 'block'; // Show the grid to be displayed
        initMasonry(showGrid); // Initialize Masonry for the newly visible grid
    }

    function updateButtonStates(activeButton, inactiveButton) {
        // Set the 'button-light' class for the inactive button and 'button' class for the active button
        activeButton.classList.remove('button-light');
        activeButton.classList.add('button');
        inactiveButton.classList.remove('button');
        inactiveButton.classList.add('button-light');

        // Swap image sources
        const activeButtonImg = activeButton.querySelector('img');
        const inactiveButtonImg = inactiveButton.querySelector('img');

        // Update image sources based on the active button
        if (activeButton === typeButton) {
            activeButtonImg.src = '/assets/images/buttons/typedesign2.svg';
            inactiveButtonImg.src = '/assets/images/buttons/lettering1.svg';
        } else {
            activeButtonImg.src = '/assets/images/buttons/lettering2.svg';
            inactiveButtonImg.src = '/assets/images/buttons/typedesign1.svg';
        }
    }

    // Initialize default state
    function initializeDefaults() {
        // Ensure the default active button (typeButton) is set correctly
        typeButton.classList.add('button');
        typeButton.classList.remove('button-light');
        letteringButton.classList.add('button-light');
        letteringButton.classList.remove('button');

        // Set default images
        typeButton.querySelector('img').src = '/assets/images/buttons/typedesign2.svg';
        letteringButton.querySelector('img').src = '/assets/images/buttons/lettering1.svg';

        // Show default grid (type design) and hide the other
        switchGrid(gridType, gridLettering);
    }

    // Call initialization function
    initializeDefaults();

    typeButton.addEventListener('click', function() {
        if (!typeButton.classList.contains('button')) {
            updateButtonStates(typeButton, letteringButton);
            switchGrid(gridType, gridLettering);
        }
    });

    letteringButton.addEventListener('click', function() {
        if (!letteringButton.classList.contains('button')) {
            updateButtonStates(letteringButton, typeButton);
            switchGrid(gridLettering, gridType);
        }
    });
});
