import { NodeDataType } from '@/components/pages/Editor'
import { Node } from 'react-flow-renderer'

interface EditorSidePanelProps {
  settings: any // これがNodeごとに固有になるイメージ
  node: Node<NodeDataType>
}

export const EditorSidePanel = ({ settings, node }: EditorSidePanelProps) => {
  return (
    <div className="w-1/4 h-5/6 bg-white absolute bottom-10 right-4 z-50 rounded-2xl drop-shadow-md">
      <div
        className="rounded-t-2xl h-4"
        style={{ backgroundColor: node.data.color }}
      />
      <p>{node.id}</p>
      <p>{node.data.name}</p>
    </div>
  )
}
