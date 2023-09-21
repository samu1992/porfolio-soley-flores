import { BannerFiltro, BannerVideo, BannerDescription} from "./components"
import{ Work } from "./components"

export default function Home() {
  return (
    <>
      <BannerVideo />
      <BannerFiltro />
      <BannerDescription />
      <Work/>
    </>
  )
}
