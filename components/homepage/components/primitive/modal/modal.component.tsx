import { CloseSvg } from "@/public"
import Image from "next/image"

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    onClick?: any
}

export const Modal = ({ isOpen, children, onClick }: ModalProps) => {
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0  z-50 flex items-start  justify-center modal  bg-[rgba(0,0,0,0.2)] ">
                    <div className="bg-white  max-w-3xl  mt-[10vh] flex flex-col  rounded-2xl shadow-lg p-8 text-[#000] ">
                        <div>
                            <button
                                className="flex justify-end float-right "
                                onClick={onClick}
                            >
                                <img
                                    src={CloseSvg}
                                    alt="cross-svg"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
