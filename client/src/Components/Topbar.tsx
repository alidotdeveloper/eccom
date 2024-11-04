
function Topbar() {
  return (
      <div className="flex flex-row w-full bg-black p-5 ">
          <div className="w-4/5 text-center">
              <span className="text-white text-center text-sm md:text-md ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          </div>
          <div className="w-1/5">
              <select className="bg-black text-white text-sm">
                  <option>English</option>
                  <option>Urdu</option>
                  <option>Arabic</option>

              </select>
              
              </div>
          
    </div>
  )
}

export default Topbar