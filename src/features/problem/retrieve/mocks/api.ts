export const mockCreateSet = async (problemIds: string[]) => {
  // 실제 API 응답 시뮬레이션을 위한 지연
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    data: {
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=problem-set-${problemIds.join('-')}`,
      problemSetId: `SET-${Date.now()}`,
    },
  }
}
