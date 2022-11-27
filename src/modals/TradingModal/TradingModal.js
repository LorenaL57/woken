import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import React, { useEffect, useState } from 'react'
import Typography from 'app/components/Typography'
import Button from 'app/components/Button'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import dist from '@davatar/react'

const TradingModal = ({ isModalOpen, closeModal }) => {
  const { i18n } = useLingui()

  // Set the date we're counting down to
  var countDownDate = new Date('11/29/2022 20:00:00 GMT-00:00').getTime()
  const [duration, setDuration] = useState(0)
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = countDownDate - now
    setDuration(distance)

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Output the result in an element with id="demo"
    document.getElementById('countdown').innerHTML =
      (days < 10 ? '0' + days : days) +
      ':' +
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds)

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x)
      document.getElementById('countdown').innerHTML = 'WSDQ Market Countdown'
    }
  }, 1000)

  //   const modal = document.querySelector("#tymodal");
  const body = document.querySelector('body')

  const showModal = function (e) {
    if (duration > 0) {
      // Disable scroll
      body.style.pointerEvents = 'none'
    } else {
      // Enable scroll
      body.style.pointerEvents = 'auto'
    }
  }

  useEffect(() => {
    showModal()
  }, [duration])

  return (
    <HeadlessUiModal.Controlled isOpen={isModalOpen} onDismiss={() => {}} maxWidth="md">
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.BorderedContent>
          <Button
            color="salmon"
            onClick={closeModal}
            style={{ background: '#FF8597', fontSize: 16, fontWeight: 600, pointerEvents: 'none', width: '100%' }}
          >
            {i18n._(t`MARKET IS CLOSED`)}
          </Button>
          <Typography variant="h3" weight={400} style={{ color: '#A6A0BB', textAlign: 'center', padding: '20px 0' }}>
            {i18n._(t`Opens in`)}
          </Typography>
          <p id="countdown" style={{ fontSize: 34, fontWeight: 700, textAlign: 'center', color: '#fff' }}></p>
          <p
            className="web3button"
            style={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: '20px 0',
            }}
          >
            <img src="https://i.imgur.com/8ESvmxo.png" alt="" style={{ width: 20, height: 20 }} />
            Community vote market
          </p>
        </HeadlessUiModal.BorderedContent>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default TradingModal
