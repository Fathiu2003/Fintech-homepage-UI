document.addEventListener('DOMContentLoaded', () => {
    const balanceAmount = document.querySelector('.balance-card .amount');
    const toggleButton = document.querySelector('.balance-card .toggle-btn');
    
    // Store the original amount text to restore it
    const originalAmount = balanceAmount.textContent;
    let isHidden = false; // Start visible

    toggleButton.addEventListener('click', () => {
        if (!isHidden) {
            // Hide the amount
            balanceAmount.textContent = '****';
            toggleButton.textContent = '👁️‍🗨️'; // Closed eye icon
            isHidden = true;
        } else {
            // Show the amount
            balanceAmount.textContent = originalAmount;
            toggleButton.textContent = '👁️'; // Open eye icon
            isHidden = false;
        }
    });
});
