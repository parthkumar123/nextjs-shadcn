import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function AccrodPage() {
    const faqs = [
        {
            question: "What is you Name?",
            answer: "Parth"
        }, {
            question: "Where are you from?",
            answer: "Ahmedabad"
        }
    ]
    return (
        <div className="flex justify-center items-center" >
            <main className="w-[800px] p-4">
                <Accordion type="single" collapsible>
                    {
                        faqs.map((item, index) => {
                            return (
                                <AccordionItem value={`item-${index}`} key={`item-${index}`}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </main>
        </div >
    )
}

export default AccrodPage
