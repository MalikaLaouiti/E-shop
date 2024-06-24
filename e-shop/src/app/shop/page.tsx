import Image from "next/image";
export default function Shop (){
    return (
        <div>
        <h1 
            style={{
                backgroundColor: "#D89486",
                textAlign: "center",
            }}
        >
        <Image 
        src="/shop.png" 
        alt="Example image" 
        width={100} 
        height={50}   
        />
        SHOP</h1>
        </div>
        );
}