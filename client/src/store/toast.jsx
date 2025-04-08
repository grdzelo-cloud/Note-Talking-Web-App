import { create } from 'zustand'

const useToast = create((set) => ({
    isClose: true,
    variant: "",
    popup: () => {
        set((state) => ({ isClose: !state.isClose }))
    },
    setVariant: (variant) => {
        set(() => ({ variant: variant }))
    }
}))

export default useToast;