import Image from "next/image";
export default function About (){
    return (
        <div>
        <h1 
            style={{
                backgroundColor: "#ECD4EA",
                textAlign: "center",
            }}
        >
        <Image 
        src="/about.png" 
        alt="Example image" 
        width={100} 
        height={50}   
        />
        ABOUT</h1>
        </div>
        );
}