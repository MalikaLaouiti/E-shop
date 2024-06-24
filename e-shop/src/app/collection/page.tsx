import Image from "next/image";
export default function Collection (){
    return (
        <div>
        <h1 
            style={{
                backgroundColor: "#E9C5C5",
                textAlign: "center",
            }}
        >
        <Image 
        src="/collection.png" 
        alt="Example image" 
        width={100} 
        height={50}   
        />
        COLLECTION</h1>
        </div>
        );
}