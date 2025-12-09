type NewJobApplicationModalProps = {
    onClose: () => void
}

function NewJobApplicationModal({ onClose }: NewJobApplicationModalProps) {
    return(
        <div className="fixed inset-0 bg-black/80 z-50">
            <div className="w-full h-full relative flex justify-center items-center">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl text-gray-300 hover:text-white"
                >
                    ×
                </button>
                <div className="bg-slate-900 p-6 rounded-xl text-white relative">
                    Hello World
                </div>
            </div>
        </div>
    )
}

export default NewJobApplicationModal