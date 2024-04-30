import Button from "./Button"


const Help = () => {
  return (
    <div className=" help-container">
      <div className="flex flex-col items-center justify-center">
        <h3 className="help-title">Be as helpful as you want to be</h3>
        <a href="/donate" className="shadow-2xl">
          <Button value="Join Help Birdy" className="helpbtn"/>
        </a>
      </div>
    </div>
  )
}

export default Help
