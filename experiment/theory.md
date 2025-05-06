<h3>Theory</h3>

<u><h4>Introduction to Steganography</h4></u>

<p> Steganography is the practice of concealing messages or information within other non-secret, ordinary files or data, making the presence of the hidden content less noticeable. Unlike cryptography, which protects the content of a message from being understood, steganography hides the very existence of the message. This makes it especially useful in situations where secrecy is crucial, such as private communication, digital watermarking, or malware communication. </p>
<u><h4>Media Files as Carriers</h4></u>

<p> Common steganographic methods use media files such as images, videos, and audio as carriers to embed hidden data. These types of files are chosen due to their large size and complex structure, which allows for minor changes to go unnoticed. For example, an image file contains millions of pixels, each of which can carry a tiny amount of hidden data without visibly altering the image. </p>
<u><h4>Least Significant Bit (LSB) Algorithm</h4></u>

<p> The LSB algorithm is one of the simplest and most widely used techniques in image steganography. It involves modifying the least significant bit (the rightmost bit) of each pixel's color value to store a piece of hidden data. Since the change in this bit causes very minimal difference in the pixel's appearance, the image looks almost the same to the human eye. </p> <p> For example, in an 8-bit RGB color system, each color channel (Red, Green, Blue) has 256 levels. Changing a value from 100 (binary 01100100) to 101 (01100101) affects only the least significant bit and is visually imperceptible. By modifying these bits across a large number of pixels, entire messages or files can be embedded in the image. </p>
<u><h4>Types of Data Hidden</h4></u>

<p> Using the LSB method, a wide range of data types can be hidden: <ul> <li><strong>Plain text</strong> – secret messages or passwords</li> <li><strong>Compressed files</strong> – ZIP, RAR, or any archived formats</li> <li><strong>Executable files</strong> – potentially malicious code or scripts</li> </ul> </p>
<u><h4>Real-World Applications and Threats</h4></u>

<p> While LSB steganography has legitimate applications such as digital watermarking and secure communication, it has also been adopted by cybercriminals. Advanced malware such as <strong>DNSChanger</strong> and <strong>Vawtrak</strong> have used steganographic methods to hide command-and-control (C2) URLs or payloads inside innocent-looking images. These malware families download images from the internet, extract the embedded information, and execute malicious instructions without triggering standard antivirus detection. </p>
<u><h4>Simulation of Malware Behavior</h4></u>

<p> To help students understand how LSB can be used in cybersecurity attacks, this experiment includes a simulation where a document file (e.g., Word) with an embedded VBScript extracts a hidden C2 URL from an image. The VBScript then downloads a payload and executes it, mimicking the behavior of a real malware. This hands-on simulation provides insight into how attackers may bypass traditional security measures. </p>
