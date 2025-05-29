import { useEffect } from 'react';
import '../cursor.css';
const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const dot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    dot.className = 'cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(dot);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(dot);
    };
  }, []);

  return null;
};

export default CustomCursor;