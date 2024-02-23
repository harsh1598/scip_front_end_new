

import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState, useRef } from "react";

interface EditorData {
  data: any;
  editedData: any;
  height?: number;
  tockenOption?: any;
  type: string;
}

const TextEditor = (props: EditorData) => {
  const [tockenOption, setTockenOption] = useState<any[]>([]);
  const [toolbar, setToolbar] = useState<any>("");
  const [value, setValue] = useState<any>();
  const editorRef = useRef<any>(null)

  useEffect(() => {
    editorRef.current = props.data
    setValue(props.data)
  }, [props.data])

  useEffect(() => {
    setTockenOption(props.tockenOption)
  }, [props.tockenOption])

  useEffect(() => {
    if (props.type == "NORMAL") {
      setToolbar('undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist | image link forecolor backcolor casechange')
    } else if (props.type == "ALL") {
      setToolbar('undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | mybutton | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist | image link forecolor backcolor casechange')
    } else if (props.type == "TOKEN") {
      setToolbar('mybutton')
    }
  }, [props.type])


  const getMenuItem = (data: any, editor: any) => {
    if (data) {
      data = props.tockenOption
      let temp: any = [];
      for (let i in data) {
        temp.push({
          type: 'menuitem',
          text: data[i].value,
          onAction: function () {
            editor.insertContent(data[i].text);
          }
        })
      }

      return temp
    } else {
      return []
    }
  }

  const updatedData = (value: any) => {
    props.editedData(value.getContent());

  };

  return (
    <>
      {
        toolbar &&
        <Editor
          onEditorChange={(evt, editor) => {
            updatedData(editor)
            editorRef.current = editor
          }}
          initialValue={value}
          init={{
            menubar: '',
            plugins: ["print", "preview", "link", "fullscreen", "image", "table"],
            toolbar: toolbar,
            setup: function (editor) {
              var items: any[] = getMenuItem(props.tockenOption, editor)
              editor.ui.registry.addMenuButton('mybutton', {
                text: 'Token',
                fetch: function (callback) {
                  callback(items);
                }
              });
            }
          }}
        />
      }

    </>
  );
};

TextEditor.defaultProps = {
  height: 200,
};

export default TextEditor;
