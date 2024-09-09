import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import { pricingCards } from '@/constants/landing-page'

export default function PricingCards() {
  return (
    <div>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center"> Escoge el adecuado para ti</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Nuestros precios estan personalizados a tus gustos. Si no estas
          {" listo"} empieza gratis
        </p>
      </section>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-nmarino">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ mes</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-nblue border-nmarino border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Empieza ahora
              </Link>
            </CardFooter>
          </Card>
          ))}
      </div>
    </div>
  );
}
