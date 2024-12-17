import About from "./About"
import Plan from "./Plan"
import Profile from "./Profile"
import Radar from "./Radar"
import Watchlist from "./Watchlist"

interface DashboardPagesProps{
    page:string
}
const DashboardPages:React.FC<DashboardPagesProps> = ({page}) => {
    switch(page){
      case 'watchlist':
       return  <Watchlist />
       break
      case 'radar':
       return  <Radar />
       break
      case 'profile':
       return  <Profile />
       break
      case 'plans':
       return  <Plan />
       break
      case 'about':
       return  <About />
       break
    default:
       return <div>Select page</div>    

    }
}

export default DashboardPages