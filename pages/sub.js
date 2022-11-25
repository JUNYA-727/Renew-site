/** @format */
import Image from "next/image";
export default function Sub() {
  return (
    <>
      <div className="test-div">
        <h1 style={{ margin: "0px" }}>hello</h1>
        <h1>max</h1>
        <div style={{ margin: "10px" }}>
          <Image
            src="/IMG_0730.jpg"
            layout="responsive"
            width="100"
            height="10"
            alt=""
          ></Image>
        </div>
      </div>
    </>
  );
}
