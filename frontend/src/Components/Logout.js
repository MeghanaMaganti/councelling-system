export default function Logout(){
    localStorage.removeItem("token")
    return(
        <div>
            <center><h1>You Had Logged Out Successfully</h1></center>
        </div>
    )
}