import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

interface State {
  error: Error | null,
  errInfo: ErrorInfo | null,
}

export class ErrorBoundary extends Component <Props, State>{
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      error: null,
      errInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {error}
  }

  componentDidCatch(error: Error, errInfo: ErrorInfo) {
    this.setState({error: error, errInfo: errInfo})
  }

  render() {
    if(this.state.errInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children
  }
}