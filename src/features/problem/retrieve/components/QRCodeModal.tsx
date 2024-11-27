import { Flex, Text, Button, Container } from '@/styles'
import { Modal } from '@/components/ui/Modal'

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
  qrCodeUrl: string
}

export const QRCodeModal = ({
  isOpen,
  onClose,
  qrCodeUrl,
}: QRCodeModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <Container>
        <Flex direction="column" align="center" gap={2}>
          <Text variant="h3">문제집 QR 코드</Text>
          <img
            src={`/api/placeholder/${qrCodeUrl}`}
            alt="문제집 QR 코드"
            width={200}
            height={200}
          />
          <Flex gap={1}>
            <Button
              variant="primary"
              onClick={() => {
                const link = document.createElement('a')
                link.href = qrCodeUrl
                link.download = '문제집_QR코드.png'
                link.click()
              }}
            >
              QR 코드 다운로드
            </Button>
            <Button variant="secondary" onClick={onClose}>
              닫기
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Modal>
  )
}
