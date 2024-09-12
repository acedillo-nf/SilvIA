import React from 'react'

import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import BreadCrumb from './bread-crumb'
import { FaUser } from 'react-icons/fa'
import { MdContactSupport } from "react-icons/md";
type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8 ">
      <BreadCrumb />
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 text-ghost">
            <div title="soporte@netfy.mx">
              <MdContactSupport />
            </div>
            <FaUser />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default InfoBar