import Button from "./Button"


const Help = () => {
  return (
    <div className="bg-orange-700 text-white p-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-3 text-lg lg:text-2xl">Be helpful as you want to be</h3>
        <a href="/donate">
          <Button value="Join Help Birdy" className="helpbtn"/>
        </a>
      </div>
      
    </div>
  )
}

export default Help
