import Image from "next/image";

export default function Contact (){
    return (
        <div>
        <h1 
            style={{
                backgroundColor: "#E4E0F7",
                textAlign: "center",
            }}
        >
        <Image 
        src="/contact.png" 
        alt="Example image" 
        width={100} 
        height={50}   
        /> 
        CONTACT</h1>
        </div>
    );
}