/**
 * Save page functionality - allows users to save the website locally
 */

export const savePageLocally = () => {
  try {
    // Get the current page HTML
    const htmlContent = document.documentElement.outerHTML;
    
    // Create a blob with the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    
    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sophia-fashion.html';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    window.URL.revokeObjectURL(url);
    
    // Optional: Show a success message
    console.log('Page saved successfully!');
    
    return true;
  } catch (error) {
    console.error('Error saving page:', error);
    return false;
  }
};

export const savePageAsImage = async () => {
  try {
    // Check if html2canvas is available
    if (typeof window !== 'undefined' && (window as any).html2canvas) {
      const canvas = await (window as any).html2canvas(document.body, {
        height: window.innerHeight,
        width: window.innerWidth,
        useCORS: true,
        allowTaint: false,
        scale: 1,
        backgroundColor: null,
      });
      
      // Convert canvas to blob
      canvas.toBlob((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'sophia-fashion-page.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 'image/png');
      
      return true;
    } else {
      // Fallback to saving HTML if html2canvas is not available
      return savePageLocally();
    }
  } catch (error) {
    console.error('Error saving page as image:', error);
    // Fallback to saving HTML
    return savePageLocally();
  }
};

export const addKeyboardShortcuts = () => {
  const handleKeyDown = (event: KeyboardEvent) => {
    // Check for Ctrl+S (Windows/Linux) or Cmd+S (Mac)
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      event.preventDefault(); // Prevent browser's default save behavior
      savePageLocally();
    }
  };

  // Add event listener
  document.addEventListener('keydown', handleKeyDown);

  // Return cleanup function
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};