import { Rocket, Globe2, Wrench, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

interface HeroProps {
  backgroundImage: string // Define the type of the backgroundImage prop as string
}

export const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  const { t } = useTranslation()

  return (
    <div
      className="flex min-h-screen bg-gradient-to-b from-lime-300 to-lime-500"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <section className="w-full py-32 md:py-48"></section>
    </div>
  )
}
