import Text from "./components/text"
import Icon from "./components/icon"
import CalendarBlank from "./assets/icons/CalendarBlank.svg?react"
import CaretDown from "./assets/icons/CaretDown.svg?react"
import CaretLeft from "./assets/icons/CaretLeft.svg?react"
import CaretRight from "./assets/icons/CaretRight.svg?react"
import CloudSun from "./assets/icons/CloudSun.svg?react"
import MoonStars from "./assets/icons/MoonStars.svg?react"
import SunHorizon from "./assets/icons/SunHorizon.svg?react"
import Trash from "./assets/icons/Trash.svg?react"
import UserSquare from "./assets/icons/UserSquare.svg?react"
import Button from "./components/button"


export default function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
      <Text variant="text-md">Teste</Text>
      <Text variant="text-md">Teste</Text>
      <Text variant="title-sm">Teste</Text>
      <Text variant="title-md">Teste</Text>
      <Text variant="title-lg">Teste</Text>
    </div>
    
    <div>
      <Icon svg={CalendarBlank} />
      <Icon svg={CaretDown} />
      <Icon svg={CaretLeft} />
      <Icon svg={CaretRight} />
      <Icon svg={CloudSun} />
      <Icon svg={MoonStars} />
      <Icon svg={SunHorizon} />
      <Icon svg={Trash} />
      <Icon svg={UserSquare} />
    </div>

    <div>
      <Button>AGENDAR</Button>
    </div>
    </>
    
  )
}

