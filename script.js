let spinning = false;

function spinWheel() {
  if (!spinning) {
    spinning = true;
    const wheel = document.getElementById('wheel');
    const spinAngle = Math.floor(Math.random() * 360) + 1080; // Spinning between 3 to 3.5 revolutions
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${spinAngle}deg)`;

    setTimeout(() => {
      wheel.style.transition = 'none';
      spinning = false;
      const sectionAngle = 360 / wheel.children.length;
      const currentRotation = spinAngle % 360;
      const selectedSection = Math.floor(currentRotation / sectionAngle);
      alert(`You landed on Section ${selectedSection + 1}`);
    }, 3000); // Wait for the spinning animation to complete
  }
}