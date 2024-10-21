'use client'
import Section from '@/components/section-label'
import { useToast } from '@/components/ui/use-toast'
import { Copy } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

const CodeSnippet = ({ id }: Props) => {
  const { toast } = useToast()
  
  const deploymentUrl = "https://www.netfy-ai.mx/"; // Store the URL in a variable for easy updates

  let snippet = `
    const iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }
    
    iframeStyles(\`
        .chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
            z-index: 9999;
        }
    \`)
    
    iframe.src = "${deploymentUrl}/chatbot"
    iframe.classList.add('chat-frame')
    document.body.appendChild(iframe)
    
    window.addEventListener("message", (e) => {
        if(e.origin !== "${deploymentUrl}") return null
        let dimensions = JSON.parse(e.data)
        iframe.width = dimensions.width
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("${id}", "${deploymentUrl}/")
    })
        `

  return (
    <div className="mt-10 flex flex-col gap-5 items-start">
      <Section
        label="Codigo para sitio web"
        message="Copia y pega este código para tener este chatbot en tu sitio web"
      />
      <div className="bg-cream px-10 rounded-lg inline-block relative">
        <Copy
          className="absolute top-5 right-5 text-gray-400 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(snippet)
            toast({
              title: 'Copiado al portapapeles',
              description: 'Ahora puedes pegar este chatbot en tu sitio web',
            })
          }}
        />
        <pre>
          <code className="text-gray-500">{snippet}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeSnippet