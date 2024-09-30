import { useEffect, useState } from 'react';

export default function ScreenDimensions() {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Hanya menjalankan logika ini di sisi klien
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Inisialisasi ukuran saat pertama kali di-render
    handleResize();

    // Menambahkan event listener untuk resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>{dimensions.width} x {dimensions.height}</p>
    </div>
  );
}
