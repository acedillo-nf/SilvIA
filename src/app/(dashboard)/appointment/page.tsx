import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-apointments'
import InfoBar from '@/components/infobar'
import Section from '@/components/section-label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'

const Page = async () => {
  try {
    const user = await currentUser()

    if (!user) return <div>Please log in to view appointments</div>

    const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
    
    if (!domainBookings || !domainBookings.bookings) {
      return <div className="w-full flex justify-center"><p>No hay citas</p></div>
    }

    const today = new Date()
    const bookingsExistToday = domainBookings.bookings.filter(
      (booking) => booking.date && new Date(booking.date).getDate() === today.getDate()
    )

    return (
      <>
        <InfoBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-1 h-0 gap-5">
          <div className="lg:col-span-2 overflow-y-auto">
            <AllAppointments bookings={domainBookings.bookings} />
          </div>
          <div className="col-span-1">
            <Section
              label="Citas de hoy"
              message="Abajo están todas tus citas"
            />
            {bookingsExistToday.length ? (
              bookingsExistToday.map((booking) => (
                <Card
                  key={booking.id}
                  className="rounded-xl overflow-hidden mt-4"
                >
                  <CardContent className="p-0 flex">
                    <div className="w-4/12 text-xl bg-peach py-10 flex justify-center items-center font-bold">
                      {booking.slot}
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between w-full p-3">
                        <p className="text-sm">
                          created<br />
                          {format(new Date(booking.createdAt), 'hh:mm a')}
                        </p>
                        <p className="text-sm">
                          Domain <br />
                          {booking.Customer?.Domain?.name || 'N/A'}
                        </p>
                      </div>
                      <Separator orientation="horizontal" />
                      <div className="w-full flex items-center p-3 gap-2">
                        <Avatar>
                          <AvatarFallback>{booking.email?.[0] || '?'}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{booking.email || 'No email'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="w-full flex justify-center">
                <p>Sin citas hoy</p>
              </div>
            )}
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error in appointment page:', error)
    return <div>An error occurred while loading appointments. Please try again later.</div>
  }
}

export default Page