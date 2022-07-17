// モック用のNODEコンポーネント
import { NodeDataType } from '@/components/pages/Editor'
import { Handle, Position } from 'react-flow-renderer'

interface EventNodeProps {
  data: NodeDataType
  selected: boolean
}

export const EventNode = ({ data, selected }: EventNodeProps) => {
  return (
    <>
      <p className="ml-1 text-[6px] text-gray-400 bg-[#f5f5f5]">{data.name}</p>
      <div
        className={
          selected
            ? 'border-2 border-blue-400 p-1 relative justify-center items-center'
            : 'border-2 border-transparent p-1 relative justify-center items-center'
        }
      >
        <div
          className={`rounded-full bg-white border-2 px-2 py-1 justify-center items-center`}
          style={{ borderColor: data.color }}
        >
          <span
            className="font-semibold text-center"
            style={{ color: data.color }}
          >
            {data.name}
          </span>
          <Handle
            type="source"
            style={{ top: '50%' }}
            position={Position.Right}
          />
        </div>
      </div>
    </>
  )
}
