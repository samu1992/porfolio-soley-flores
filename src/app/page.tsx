import { BannerFiltro, BannerVideo, BannerDescription} from "./components"
import{ Work, StandFor } from "./components"

export default function Home() {
  return (
    <>
      <BannerVideo />
      <BannerFiltro />
      <BannerDescription />
      <Work/>
      <StandFor/>
    </>
  )
}
